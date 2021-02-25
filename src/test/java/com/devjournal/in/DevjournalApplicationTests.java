package com.devjournal.in;

import com.devjournal.in.rest.PersonController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class DevjournalApplicationTests {

	@Autowired
	private PersonController personController;

	@Test
	void contextLoads() throws  Exception {
		assertThat(personController).isNotNull();
	}

}
