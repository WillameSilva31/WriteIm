package javaProjects.ProjetSecret.t1.users.controller;

import javaProjects.ProjetSecret.t1.DTO.LoginRequestDTO;
import javaProjects.ProjetSecret.t1.DTO.ResponseDTO;
import javaProjects.ProjetSecret.t1.infra.security.TokenServico;
import javaProjects.ProjetSecret.t1.users.Users;
import javaProjects.ProjetSecret.t1.users.repository.UsersRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
@Log4j2
public class AuthController {
    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenServico tokenServico;

    @GetMapping
    public ResponseEntity<String> getUser(){
        return ResponseEntity.ok("sucesso");
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body){
        Users users = this.usersRepository.findByEmail(body.email()).orElseThrow(()-> new RuntimeException("Usuário não encontrado"));
        if (passwordEncoder.matches( body.password(), users.getPassword())){
            String token = this.tokenServico.geradorToken(users);

            ResponseCookie cookie = ResponseCookie
                    .from("jwt", token)
                    .httpOnly(true)
                    .secure(true)
                    .path("/")
                    .maxAge(900)
                    .sameSite("Strict")
                    .build();


            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, cookie.toString())
                    .body(new ResponseDTO(users.getName(), cookie.toString()));
        }
        return ResponseEntity.badRequest().build();
    }
}

