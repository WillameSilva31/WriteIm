package javaProjects.ProjetSecret.t1.DTO;

import javaProjects.ProjetSecret.t1.users.Users;


public record UserDTO(String id, String name, String email) {
    public UserDTO(Users users) {
        this(users.getId().toString(), users.getName(), users.getEmail());
    }
}
