package javaProjects.ProjetSecret.t1.infra.security;
import javaProjects.ProjetSecret.t1.users.Users;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenServico {
    @Value("${api.security.token.segredo}")
    private String segredo;

    public String geradorToken(Users users){
        try {
            Algorithm algorithm = Algorithm.HMAC256(segredo);
            String token = JWT.create()
                    .withIssuer("T1Database")
                    .withSubject(users.getEmail())
                    .withExpiresAt(this.tempoExpiradoToken())
                    .sign(algorithm);

            return token;
        } catch(JWTCreationException exception){
            throw new RuntimeException("Error durante a autenticação");
        }
    }

    public String validarToken(String token){
        try {
            Algorithm algorithm = Algorithm.HMAC256(segredo);
            return JWT.require(algorithm)
                    .withIssuer("T1Database")
                    .build()
                    .verify(token)
                    .getSubject();
        } catch (JWTVerificationException exception){
            return null;
        }
    }

    private Instant tempoExpiradoToken(){
        return LocalDateTime.now().plusHours(3).toInstant(ZoneOffset.of("-03:00"));
    }
}
