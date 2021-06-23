package de.neuefische.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SurfSpotDto {
    private String latitude;
    private String longitude;
}
