package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SurfSpot {
    private String id;
    private String name;
    private int longitude;
    private int latitude;
//    private Geography geography;
//    private Weather weather;
//    private Waves waves;
}
