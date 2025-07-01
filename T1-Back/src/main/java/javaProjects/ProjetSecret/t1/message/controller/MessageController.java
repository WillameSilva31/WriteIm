package javaProjects.ProjetSecret.t1.message.controller;

import javaProjects.ProjetSecret.t1.DTO.MessageRequestDTO;
import javaProjects.ProjetSecret.t1.DTO.MessageResponseDTO;
import javaProjects.ProjetSecret.t1.message.Message;
import javaProjects.ProjetSecret.t1.message.repository.MessageRepository;
import javaProjects.ProjetSecret.t1.users.Users;
import javaProjects.ProjetSecret.t1.users.repository.UsersRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/message")
@AllArgsConstructor
@Log4j2
public class MessageController {
    private final MessageRepository messageRepository;
    private final UsersRepository usersRepository;

    @PostMapping("/post")
    public ResponseEntity postMessage (@RequestBody MessageRequestDTO messageDTO, @AuthenticationPrincipal Users user){

        Optional<Users> users = usersRepository.findById(user.getId());
        if (users.isPresent()) {
            Message message = new Message();
            message.setContent(messageDTO.content());
            message.setUser_id(user.getId());
            message.setName_user(users.get().getName());
            messageRepository.save(message);
            return ResponseEntity.ok(new MessageResponseDTO(message.getContent(),message.getName_user(), message.getDateTime()));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping
    public List<MessageResponseDTO> getAllMessages (){
        return messageRepository.findAll()
                .stream()
                .map(MessageResponseDTO:: fromEntity)
                .toList();
    }

}
