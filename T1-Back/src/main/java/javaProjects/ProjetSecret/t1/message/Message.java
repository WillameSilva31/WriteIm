package javaProjects.ProjetSecret.t1.message;


import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name="message")
@Table(name = "message")
@EqualsAndHashCode
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Message implements Serializable {
    private static final long serial = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String content;
    private LocalDateTime dateTime;
    private UUID user_id;
    private String name_user;

    @PrePersist
    public void prePersist() {
        dateTime = LocalDateTime.now();
    }

    public Message(String content, UUID user_id){
        this.content = content;
        this.user_id = user_id;
    }

}
