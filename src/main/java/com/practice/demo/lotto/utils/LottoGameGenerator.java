package com.practice.demo.lotto.utils;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;

public class LottoGameGenerator {

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
    return lottoBallNumbers.remove(createRandomIndex(numbersSize));
  }

  public ArrayList<Integer> createGame(int gameLength) {
    ArrayList<Integer> game = new ArrayList<>();

    int lottoNumbersLength = 45;
    LottoNumbers lottoNumbers = new LottoNumbers(lottoNumbersLength);

    int shuffleTimes = 30;

    int count = 0;
    while (count++ < gameLength) {
      game.add(popNumber(shuffleNumbers(lottoNumbers, shuffleTimes)));
    }
    return game;
  }

  public ArrayList<Integer> createGameFromString(String numbersString) {
    ArrayList<Integer> game = new ArrayList<>();
    ArrayList<String> numberChars = new ArrayList<>(Arrays.asList(numbersString.split(" ")));
    numberChars.forEach((character) -> game.add(Integer.parseInt(character)));
    return game;
  }
}
