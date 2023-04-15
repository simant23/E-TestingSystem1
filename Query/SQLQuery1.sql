select * from SchoolUser where Type='Student';

select FullMark,PassMark from IExam where IExamId='4'

select E.Question,A.Answer,E.CorrectAnswer,e.IMark from Answer A
inner join EQuestions E on A.EQuestionId=E.EQuestionId 
where A.UserId='170' and E.IExamId='4' ORDER BY E.EQuestionId DESC;


select E.Question,E.IExamId,A.Answer,E.CorrectAnswer,e.IMark from Answer A
inner join EQuestions E on A.EQuestionId=E.EQuestionId and A.Answer=E.CorrectAnswer
where UserId='170'

select sum(E.IMark) MarkObtained from Answer A
inner join EQuestions E on A.EQuestionId=E.EQuestionId and A.Answer=E.CorrectAnswer
where UserId='170'and E.IExamId='4'; 

select E.Question,E.IExamId,A.Answer,E.CorrectAnswer,e.IMark,IE.PassMark,IE.FullMark  from Answer A
inner join EQuestions E on A.EQuestionId=E.EQuestionId 
inner join IExam IE on IE.IExamId=E.IExamId
where A.UserId='170' 

SELECT COUNT(*) AS TotalStudents
FROM SchoolUser
WHERE Type = 'Student' AND IsApproved = 1;
