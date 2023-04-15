select sum(E.IMark) MarkObtained from Answer A
                inner join EQuestions E on A.EQuestionId=E.EQuestionId and A.Answer=E.CorrectAnswer
                where UserId = 4 and E.IExamId= 170  Group by E.IMark