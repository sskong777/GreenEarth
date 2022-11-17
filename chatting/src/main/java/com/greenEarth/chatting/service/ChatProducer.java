package com.greenEarth.chatting.service;

import com.greenEarth.chatting.dto.ChatMessage;
import com.greenEarth.chatting.dto.ChatNotice;
import com.greenEarth.chatting.dto.ChatType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatProducer {

    private final KafkaTemplate<String, ChatNotice> noticeKafkaTemplate;

    private final KafkaTemplate<String, ChatMessage> messageKafkaTemplate;

    public void sendNotice(String topic, ChatNotice notice) {
        if (notice.getType().equals(ChatType.JOIN)) {
            notice.setJoinNotice();
        } else {
            notice.setLeaveNotice();
        }
        log.info("{}", notice.toString());
        this.noticeKafkaTemplate.send(topic, notice);
    }

    public void sendMessage(String topic, ChatMessage message) {
        log.info("{}", message.toString());
        this.messageKafkaTemplate.send(topic, message);
    }
}
