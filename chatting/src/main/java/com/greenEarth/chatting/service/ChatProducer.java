package com.greenEarth.chatting.service;

import com.greenEarth.chatting.dto.ChatNotice;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatProducer {

    private final KafkaTemplate<String, ChatNotice> kafkaTemplate;

    public void sendJoinNotice(String topic, ChatNotice notice) {
        notice.setJoinNotice();
        log.info("{}", notice.getNotice());
        this.kafkaTemplate.send(topic, notice);
    }
}
