package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SpotLocationDetails {
    @Id
    private String id;
    private String name;
    private String latitude;
    private String longitude;
    private String continent;
    private String country;
    private String region;
}
