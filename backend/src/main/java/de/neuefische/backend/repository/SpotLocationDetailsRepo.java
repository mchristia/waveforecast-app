package de.neuefische.backend.repository;

import de.neuefische.backend.model.SpotLocationDetails;
import org.springframework.stereotype.Repository;

import static java.util.Map.entry;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class SpotLocationDetailsRepo {
    Map<String, SpotLocationDetails> spotLocationDetailsList = Map.ofEntries(
            entry("43.95339608383859"+"-1.3642210235940333", SpotLocationDetails.builder()
                    .id("43.95339608383859"+"-1.3642210235940333")
                    .name("Plage de St. Girons")
                    .latitude("43.95339608383859")
                    .longitude("-1.3642210235940333")
                    .continent("Europa")
                    .country("France")
                    .region("Landes")
                    .build()),
            entry("43.854448442635984"+"-1.3916103531016923", SpotLocationDetails.builder()
                    .id("43.854448442635984"+"-1.3916103531016923")
                    .name("Plage de Moliets")
                    .latitude("43.854448442635984")
                    .longitude("-1.3916103531016923")
                    .continent("Europa")
                    .country("France")
                    .region("Biarritz")
                    .build()),
            entry("43.4753051551581"+"-1.5684491397804103", SpotLocationDetails.builder()
                    .id("43.4753051551581"+"-1.5684491397804103")
                    .name("Plage de la Cote de Basques")
                    .latitude("43.4753051551581")
                    .longitude("-1.5684491397804103")
                    .continent("Europa")
                    .country("France")
                    .region("Biarritz")
                    .build()),
            entry("43.46491512696849"+"-1.5760960225063894", SpotLocationDetails.builder()
                    .id("43.46491512696849"+"-1.5760960225063894")
                    .name("Plage de Milady")
                    .latitude("43.46491512696849")
                    .longitude("-1.5760960225063894")
                    .continent("Europa")
                    .country("France")
                    .region("Biarritz")
                    .build()),
            entry("43.38498328185575" +"-3.0052290767247047", SpotLocationDetails.builder()
                    .id("43.38498328185575"+"-3.0052290767247047")
                    .name("Playa de Sopelana")
                    .latitude("43.38498328185575")
                    .longitude("-3.0052290767247047")
                    .continent("Europa")
                    .country("Spain")
                    .region("Bilbao")
                    .build()),
            entry("39.373847164089895" + "-9.336478033348522", SpotLocationDetails.builder()
                    .id("39.373847164089895" + "-9.336478033348522")
                    .name("Praia Baleal Norte")
                    .latitude("39.373847164089895")
                    .longitude("-9.336478033348522")
                    .continent("Europa")
                    .country("Portugal")
                    .region("Peniche")
                    .build()),
            entry("39.36526264984761" +"-9.343233714472387", SpotLocationDetails.builder()
                    .id("39.36526264984761" +"-9.343233714472387")
                    .name("Praia Baleal Sul")
                    .latitude("39.36526264984761")
                    .longitude("-9.343233714472387")
                    .continent("Europa")
                    .country("Portugal")
                    .region("Peniche")
                    .build())
               );

    public List<SpotLocationDetails> getLocationDetails(){
        return new ArrayList<>(spotLocationDetailsList.values());
    }

    public SpotLocationDetails findSpotLocationById(String id){
        if(id != null){
            if(spotLocationDetailsList.containsKey(id)){
                return spotLocationDetailsList.get(id);
            }
        }
        return new SpotLocationDetails();
    }
}
