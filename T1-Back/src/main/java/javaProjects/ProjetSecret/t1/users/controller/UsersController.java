package javaProjects.ProjetSecret.t1.users.controller;
import javaProjects.ProjetSecret.t1.DTO.*;
import javaProjects.ProjetSecret.t1.infra.security.TokenServico;
import javaProjects.ProjetSecret.t1.users.Users;
import javaProjects.ProjetSecret.t1.users.repository.UsersRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
@RequestMapping("/user")
@AllArgsConstructor
@Log4j2
public class UsersController {
    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenServico tokenServico;


    @PostMapping
    public ResponseEntity register (@RequestBody RegisterRequestDTO body){
        Optional<Users> user = this.usersRepository.findByEmail(body.email());
        if (user.isEmpty()){
            Users newUser = new Users();
            newUser.setPassword(passwordEncoder.encode(body.password()));
            newUser.setName(body.name());
            newUser.setEmail(body.email());
            this.usersRepository.save(newUser);

            String token = this.tokenServico.geradorToken(newUser);
            return ResponseEntity.ok(new ResponseDTO(newUser.getName(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body){
        Users users = this.usersRepository.findByEmail(body.email()).orElseThrow(()-> new RuntimeException("Usuário não encontrado"));
        if (passwordEncoder.matches( body.password(), users.getPassword())){
            String token = this.tokenServico.geradorToken(users);
            return ResponseEntity.ok(new ResponseDTO(users.getName(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/get")
    public ResponseEntity getUser(@AuthenticationPrincipal Users user){
        if (user == null){
            return ResponseEntity.status(401).body("Usuário não autenticado");
        }
        return ResponseEntity.ok(new UserDTO(user));
    }

    @PutMapping
    public ResponseEntity putUser(@RequestBody PutRequestDTO userDTO){
        Optional<Users> user = this.usersRepository.findById(userDTO.id());
        if (!user.isEmpty()) {
            Users userChange = user.get();
            if(!userDTO.name().isEmpty())userChange.setName(userDTO.name());
            if(!userDTO.email().isEmpty())userChange.setEmail(userDTO.email());
            if(!userDTO.password().isEmpty())userChange.setPassword(passwordEncoder.encode(userDTO.password()));

            Users userNew = usersRepository.save(userChange);

            return ResponseEntity.ok(new UserDTO(userNew));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable UUID id){
        Optional <Users> user = this.usersRepository.findById(id);
        if (!user.isEmpty()){
            usersRepository.deleteById(id);
            return ResponseEntity.ok("Usuario deletado!");
        }
        return ResponseEntity.notFound().build();
    }

    /*@GetMapping
    public List<UsersResponseDTO> getAll(){
        List<UsersResponseDTO> users = usersService.getAll().stream().map(UsersResponseDTO::new).toList();
        return users;
    }*/
}
