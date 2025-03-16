package javaProjects.ProjetSecret.t1.DTO;

import javaProjects.ProjetSecret.t1.users.Users;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.UUID;

public record UserDTO(UserDetails user) {
    public UserDTO(Users users){
        this(new UserDetails(users.getId().toString(),users.getName(),users.getEmail()));
    }

    public record UserDetails(String id, String name, String email) {}
}
