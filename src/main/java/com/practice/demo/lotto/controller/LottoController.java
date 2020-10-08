package com.practice.demo.lotto.controller;

import com.practice.demo.common.response.CommonResult;
import com.practice.demo.common.response.ResponseService;
import com.practice.demo.lotto.service.LottoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class LottoController {

  private final LottoService lottoService;

  @GetMapping("/lotto/game/winning")
  @ResponseBody
  public CommonResult<Object> getWinningGame() {
    return ResponseService.passToClient(lottoService.findWinningGame());
  }

  @GetMapping("/lotto/game/random")
  public CommonResult<Object> getRandomGame() {
    return ResponseService.passToClient(lottoService.createRandomGame());
  }

  @GetMapping("/lotto/games/random")
  public CommonResult<Object> getRandomGameSet() {
    return ResponseService.passToClient(lottoService.createRandomGames());
  }
}
