package com.greenEarth.chatting.config;

import com.greenEarth.chatting.dto.ChatMessage;
import com.greenEarth.chatting.dto.ChatNotice;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@EnableKafka
@Configuration
public class ChatProducerConfig {

    private final String KAFKA_BROKER;

    private final String KAFKA_GROUP;

    public ChatProducerConfig(
            @Value("${spring.kafka.producer.bootstrap-servers}") String kafka_broker,
            @Value("${spring.kafka.consumer.group-id}") String kafka_group) {
        this.KAFKA_BROKER = kafka_broker;
        this.KAFKA_GROUP = kafka_group;
        log.info("broker = {} & group = {}", this.KAFKA_BROKER, this.KAFKA_GROUP);
    }

    @Bean
    public ProducerFactory<String, ChatNotice> noticeProducerFactory() {
        return new DefaultKafkaProducerFactory<>(producerConfiguration(),
                new StringSerializer(),
                new JsonSerializer<>());
    }

    @Bean
    public KafkaTemplate<String, ChatNotice> noticeKafkaTemplate() {
        return new KafkaTemplate<>(noticeProducerFactory());
    }

    @Bean
    public Map<String, Object> producerConfiguration() {
        Map<String, Object> configMap = new HashMap<>();
        configMap.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, this.KAFKA_BROKER);
        configMap.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configMap.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        return configMap;
    }
}