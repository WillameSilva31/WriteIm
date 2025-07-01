package javaProjects.ProjetSecret.t1.message.repository;

import javaProjects.ProjetSecret.t1.message.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MessageRepository extends JpaRepository<Message, UUID> {
}
