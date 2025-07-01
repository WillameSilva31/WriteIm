package javaProjects.ProjetSecret.t1.DTO;

import javaProjects.ProjetSecret.t1.message.Message;

import java.time.LocalDateTime;
import java.util.UUID;

public record MessageResponseDTO(String content, String name,LocalDateTime dateTime) {
    public static MessageResponseDTO fromEntity(Message message) {
        return new MessageResponseDTO(
                message.getContent(),
                message.getName_user(),
                message.getDateTime()
        );
    }
}
