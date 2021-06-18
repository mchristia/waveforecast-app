package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
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
