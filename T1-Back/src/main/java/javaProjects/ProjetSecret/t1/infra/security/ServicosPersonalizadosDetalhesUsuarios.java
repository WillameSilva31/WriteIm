package javaProjects.ProjetSecret.t1.infra.security;

import javaProjects.ProjetSecret.t1.users.Users;
import javaProjects.ProjetSecret.t1.users.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class ServicosPersonalizadosDetalhesUsuarios implements UserDetailsService {
    @Autowired
    private UsersRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = this.repository.findByEmail(username).orElseThrow(()-> new UsernameNotFoundException(("Usuário não encontrado")));
        return new org.springframework.security.core.userdetails.User(users.getEmail(),users.getPassword(),new ArrayList<>());
    }
}
