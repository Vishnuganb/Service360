package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "services"
)
public class Services {

    @Id
    @GeneratedValue()
    @Column(updatable = false)
    private Long serviceid;

    @Column( columnDefinition = "TEXT")
    private String serviceName;

    @Column(columnDefinition = "BYTEA")
    private byte[] serviceImage;

    @Column(columnDefinition = "BOOLEAN")
    private Boolean enable;

    @ManyToOne
    @JoinColumn(name = "servicecategoryid")
    private ServiceCategory serviceCategory;

    @PrePersist
    public void prePersist() {
        this.enable = true;
    }
}
