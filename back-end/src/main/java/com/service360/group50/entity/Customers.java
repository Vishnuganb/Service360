package com.service360.group50.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "customers",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "customer_email_unique",
                        columnNames = "email"
                )
        }
)
public class Customers {

    @Id
    @SequenceGenerator (
        name = "customers_sequence",
        sequenceName = "customers_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "customers_sequence"
    )
    @Column(
        name = "customer_id",
        updatable = false
    )
    private Long customer_id;
    @Column(
        name = "first_name",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String first_name;
    @Column(
        name = "last_name",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String last_name;
    @Column(
        name = "email",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String email;
    @Column(
        name = "phone_number",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String phone_number;
    @Column(
        name = "address",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String address;
    @Column(
        name = "registration_date",
        nullable = false
    )
    private LocalDate registration_date;
    @Column(
        name = "password",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String password;
    @Column(
        name = "role",
        nullable = false,
        columnDefinition = "TEXT"
    )
    private String role;
    @Column(
        name = "is_active",
        nullable = false
    )
    private boolean is_active;
    @Column(
        name = "is_enabled",
        nullable = false
    )
    private boolean is_enabled;

    public Customers ( String first_name,
                       String last_name,
                       String email,
                       String phone_number,
                       String address,
                       LocalDate registration_date,
                       String password,
                       String role,
                       boolean is_active,
                       boolean is_enabled ) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.registration_date = registration_date;
        this.password = password;
        this.role = role;
        this.is_active = is_active;
        this.is_enabled = is_enabled;
    }

    public Long getCustomer_id () {
        return this.customer_id;
    }

    public String getFirst_name () {
        return this.first_name;
    }

    public String getLast_name () {
        return this.last_name;
    }

    public String getEmail () {
        return this.email;
    }

    public String getPhone_number () {
        return this.phone_number;
    }

    public String getAddress () {
        return this.address;
    }

    public LocalDate getRegistration_date () {
        return this.registration_date;
    }

    public String getRole () {
        return this.role;
    }

    public boolean is_active () {
        return this.is_active;
    }

    public boolean is_enabled () {
        return this.is_enabled;
    }

    public void setCustomer_id ( Long customer_id ) {
        this.customer_id = customer_id;
    }

    public void setFirst_name ( String first_name ) {
        this.first_name = first_name;
    }

    public void setLast_name ( String last_name ) {
        this.last_name = last_name;
    }

    public void setEmail ( String email ) {
        this.email = email;
    }

    public void setPhone_number ( String phone_number ) {
        this.phone_number = phone_number;
    }

    public void setAddress ( String address ) {
        this.address = address;
    }

    public void setRegistration_date ( LocalDate registration_date ) {
        this.registration_date = registration_date;
    }

    public void setPassword ( String password ) {
        this.password = password;
    }

    public void setRole ( String role ) {
        this.role = role;
    }

    public void set_active ( boolean is_active ) {
        this.is_active = is_active;
    }

    public void set_enabled ( boolean is_enabled ) {
        this.is_enabled = is_enabled;
    }

    @Override
    public String toString () {
        return "Customers{" +
                "customer_id=" + customer_id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", address='" + address + '\'' +
                ", registration_date=" + registration_date +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                ", is_active=" + is_active +
                ", is_enabled=" + is_enabled +
                '}';
    }
}
