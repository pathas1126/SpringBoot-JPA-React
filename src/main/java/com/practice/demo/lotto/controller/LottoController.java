package com.practice.demo.lotto.controller;

import com.practice.demo.common.response.CommonResult;
import com.practice.demo.common.response.ResponseService;
import com.practice.demo.lotto.domain.dto.LottoDTO;
import com.practice.demo.lotto.service.LottoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

  @PostMapping("/lotto/game/custom")
  @ResponseBody
  public CommonResult<Object> postCustomGame(
      @RequestBody LottoDTO.CustomGameRequest customGameRequest) {
    return ResponseService.passToClient(lottoService.saveCustomGame(customGameRequest));
  }

  @GetMapping("/lotto/games/random")
  public CommonResult<Object> getRandomGameSet() {
    return ResponseService.passToClient(lottoService.createRandomGames());
  }
}
