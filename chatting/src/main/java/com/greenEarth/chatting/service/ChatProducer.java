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

    private final KafkaTemplate<String, ChatNotice> noticeKafkaTemplate;

    public void sendNotice(String topic, ChatNotice chatNotice) {
        if (chatNotice.getType().equals(ChatNotice.NoticeType.JOIN)) {
            chatNotice.setJoinNotice();
        } else {
            chatNotice.setLeaveNotice();
        }
        log.info("{}", chatNotice.toString());
        this.noticeKafkaTemplate.send(topic, chatNotice);
    }
}
