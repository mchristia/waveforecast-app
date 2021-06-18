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
    private String time;
    private AirTemperature airTemperature;
    private WindSpeed windSpeed;
    private WindDirection windDirection;
    private WaterTemperature waterTemperature;
    private WaveHeight waveHeight;
    private WavePeriod wavePeriod;
    private WaveDirection waveDirection;

}
