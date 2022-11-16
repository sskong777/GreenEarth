package com.greenEarth.chatting.service;

import com.greenEarth.chatting.dto.ChatMessage;
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
            containerFactory = "noticeListenerContainerFactory"
    )
    public void receiveNotice(ChatNotice notice) {
        log.info("received notice: {}", notice.toString());
        messagingTemplate.convertAndSend("/room/" + notice.getRoomId(), notice);
    }

    @KafkaListener(
            topics = "${spring.kafka.template.default-topic}",
            containerFactory = "messageListenerContainerFactory"
    )
    public void receiveMessage(ChatMessage message) {
        log.info("received message: {}", message.toString());
        messagingTemplate.convertAndSend("/room/" + message.getRoomId(), message);
    }
}
