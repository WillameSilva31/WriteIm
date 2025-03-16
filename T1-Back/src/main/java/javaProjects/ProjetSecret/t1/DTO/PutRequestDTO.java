package javaProjects.ProjetSecret.t1.DTO;

import java.util.UUID;

public record PutRequestDTO(UUID id, String name, String email, String password) {
}
