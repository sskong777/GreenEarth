package com.greenEarth.chatting.config;

import com.greenEarth.chatting.dto.ChatNotice;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@EnableKafka
@Configuration
public class ChatConsumerConfig {

    private final String KAFKA_BROKER;  // (브로커로서의) 카프카 실행 주소

    private final String KAFKA_GROUP;   // consumer 식별할 수 있는 그룹

    public ChatConsumerConfig(
            @Value("${spring.kafka.consumer.bootstrap-servers}") String kafka_broker,
            @Value("${spring.kafka.consumer.group-id}") String kafka_group) {
        this.KAFKA_BROKER = kafka_broker;
        this.KAFKA_GROUP = kafka_group;
        log.info("broker = {} & group = {}", this.KAFKA_BROKER, this.KAFKA_GROUP);
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, ChatNotice> noticeListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, ChatNotice> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(noticeConsumerFactory());
        return factory;
    }

    @Bean
    public ConsumerFactory<String, ChatNotice> noticeConsumerFactory() {
        Map<String, Object> configMap = new HashMap<>();
        configMap.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, this.KAFKA_BROKER);
        configMap.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configMap.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        configMap.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        configMap.put(ConsumerConfig.GROUP_ID_CONFIG, this.KAFKA_GROUP);
        return new DefaultKafkaConsumerFactory<>(configMap, new StringDeserializer(), new JsonDeserializer<>(ChatNotice.class));
    }
}
