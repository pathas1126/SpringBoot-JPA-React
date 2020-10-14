package com.practice.demo.lotto.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Lotto {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "LOTTO_ID")
  private Long id;

  private String numbers;

  @Builder
  public Lotto(Long lotto_id, String numbers) {
    this.id = lotto_id;
    this.numbers = numbers;
  }
}
