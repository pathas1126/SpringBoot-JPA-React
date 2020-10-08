package com.practice.demo.lotto.utils;

import lombok.Getter;

import java.util.ArrayList;
import java.util.stream.IntStream;

@Getter
public class LottoNumbers extends ArrayList<Integer> {
  private final ArrayList<Integer> lottoNumbers;

  public LottoNumbers(int lottoNumbersLength) {
    this.lottoNumbers = createLottoNumbers(lottoNumbersLength);
  }

  private ArrayList<Integer> createLottoNumbers(int numbersLength) {
    ArrayList<Integer> lottoNumbers = new ArrayList<>();
    IntStream.rangeClosed(1, numbersLength).forEach(lottoNumbers::add);
    return lottoNumbers;
  }
}
