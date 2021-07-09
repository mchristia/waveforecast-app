package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection="surfspots")
public class SurfSpot {
    @Id
    private String id;
    private SpotLocationDetails spotLocationDetails;
    private List<SGSurfData> surfData;
}