package com.greenEarth.chatting.service;

import com.greenEarth.chatting.dto.ChatNotice;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatConsumer {

    private final SimpMessageSendingOperations messagingTemplate;

    @KafkaListener(
            topics = "${spring.kafka.template.default-topic}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void receive(ChatNotice notice) {
        log.info("received notice: {}", notice.getNotice());
        messagingTemplate.convertAndSend("/room/" + notice.getUsername(), notice);
    }
}
