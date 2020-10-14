package com.practice.demo.lotto.utils;

import lombok.Getter;

import java.util.ArrayList;
import java.util.Arrays;

@Getter
public class LottoGame {
  private ArrayList<Integer> game;

  public LottoGame(Integer gameLength) {
    setGame(gameLength);
  }

  public LottoGame(String lottoGameString) {
    setGameFromString(lottoGameString);
  }

  private int createRandomIndex(int max) {
    return (int) Math.floor(Math.random() * max);
  }

  private LottoNumbers shuffleNumbers(LottoNumbers lottoNumbers, int shuffleTimes) {
    int count = 0;
    ArrayList<Integer> lottoBallNumbers = lottoNumbers.getLottoNumbers();
    while (count++ < shuffleTimes) {
      int sizeBeforeRemove = lottoBallNumbers.size();
      int removeTargetIndex = createRandomIndex(sizeBeforeRemove);

      Integer poppedNumber = lottoBallNumbers.remove(removeTargetIndex);

      int sizeAfterRemove = lottoBallNumbers.size();
      int addTargetIndex = createRandomIndex(sizeAfterRemove);

      lottoBallNumbers.add(createRandomIndex(addTargetIndex), poppedNumber);
    }
    return lottoNumbers;
  }

  public Integer popNumber(LottoNumbers lottoNumbers) {
    ArrayList<Integer> lottoBallNumbers = lottoNumbers.getLottoNumbers();
    int numbersSize = lottoBallNumbers.size();
    return lottoBallNumbers.get(createRandomIndex(numbersSize));
  }

  public void setGame(int gameLength) {
    ArrayList<Integer> game = new ArrayList<>();

    int lottoNumbersLength = 45;
    LottoNumbers lottoNumbers = new LottoNumbers(lottoNumbersLength);

    int shuffleTimes = 30;

    int count = 0;
    while (count++ < gameLength) {
      game.add(popNumber(shuffleNumbers(lottoNumbers, shuffleTimes)));
    }
    this.game = game;
  }

  public void setGameFromString(String numbersString) {
    ArrayList<Integer> numbers = new ArrayList<>();
    ArrayList<String> numberChars = new ArrayList<>(Arrays.asList(numbersString.split(" ")));
    numberChars.forEach((character) -> numbers.add(Integer.parseInt(character)));
    this.game = numbers;
  }
}
