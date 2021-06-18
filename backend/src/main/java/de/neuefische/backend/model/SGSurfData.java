package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SGSurfData {
    private LocalDateTime timeStamp;
    private String airTemperature;
    private String windSpeed;
    private String windDirection;
    private String waterTemperature;
    private String waveHeight;
    private String wavePeriod;
    private String waveDirection;

}
