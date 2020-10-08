package com.practice.demo.lotto.repository;

import com.practice.demo.lotto.domain.Lotto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LottoRepository extends JpaRepository<Lotto, Long> {}
