------------------------------------Creation of Database------------------------------------------------
Create Database ETestSystem;
----------------------Using the Database Created So far-----------------------------------------------------
Use ETestSystem;
----------------------------------Creation of SchoolUser Table--------------------------------------------------------------------------------------
UPDATE EQuestions set QuestionStatus = 1  where IExamId = 5;
select * from EQuestions;
Create Table SchoolUser 
(
	UserId INT IDENTITY(100, 10) PRIMARY KEY NOT NULL,
	EmailId NVARCHAR(100) NOT NULL,
	FullName VARCHAR(50) NOT NULL,
	Phone NVARCHAR(20) UNIQUE NOT NULL,
	Gender VARCHAR(10) NOT NULL,
	Type VARCHAR(10) NOT NULL,
	Address NVARCHAR(100) NOT NULL,
	Password NVARCHAR(20) NOT NULL,
	IsActive INT DEFAULT '1',
	IsApproved INT DEFAULT '0'
);

ALTER TABLE SchoolUser
ADD CONSTRAINT EmailId UNIQUE (EmailId);

----------------------------------------------Creation of Student Table--------------------------------------------------------------

Create Table Student (
UserId INT FOREIGN KEY REFERENCES SchoolUser(UserId) UNIQUE NOT NULL,
StudentId INT PRIMARY KEY NOT NULL,
GuardianName VARCHAR(100) NOT NULL,
Class INT NOT NULL,
DOB Date NOT NULL,
EnrollmentDate Date NOT NULL
);

--------------------------------Creation of Teacher Table-------------------------------------------------------------------------------
Create Table Teacher (
UserId INT FOREIGN KEY REFERENCES SchoolUser(UserId) UNIQUE NOT NULL,
TeacherId INT PRIMARY KEY NOT NULL,
Qualification VARCHAR(100) NOT NULL,
Major VARCHAR(100) NOT NULL,
HireDate DATE NOT NULL,
SubTeacher VARCHAR(100) NOT NULL,
TExperience INT NOT NULL
);
-------------------------------------------Creating Admin Account-------------------------------------------------------------------------

------------------------------------Creation of Notice Table-------------------------------------------------------------------------------
CREATE TABLE Notice (
    NoticeId INT IDENTITY(10, 1) PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    PostedAt DATETIME NOT NULL,
    UserId INT FOREIGN KEY REFERENCES SchoolUser(UserId) NOT NULL
    
);

SELECT COUNT(*) AS TotalNotice
                FROM Notice
                WHERE UserId = 190


---------------------Notice_SchoolUser----------------------------------------------------



------------------------Subject----------------------------------------------

CREATE TABLE Subjects(
    SubjectId INT PRIMARY KEY IDENTITY(1,10),
    SubjectName VARCHAR(50) NOT NULL
);

INSERT INTO Subjects( SubjectName) VALUES ('Computer Science');
INSERT INTO Subjects( SubjectName) VALUES ('Mathematics');
INSERT INTO Subjects( SubjectName) VALUES ('Science');
INSERT INTO Subjects( SubjectName) VALUES ('English');
INSERT INTO Subjects( SubjectName) VALUES ('Nepali');
INSERT INTO Subjects( SubjectName) VALUES ('Social Studies');
INSERT INTO Subjects( SubjectName) VALUES ('EPH');
INSERT INTO Subjects( SubjectName) VALUES ('Opt.Mathematics');


-----------------------------Question Paper----------------
CREATE TABLE QuestionPaper (
	   PaperId INT PRIMARY KEY IDENTITY(1,1),
	   SubjectId INT FOREIGN KEY REFERENCES Subjects(SubjectId) NOT NULL,
	   UserId INT FOREIGN KEY REFERENCES SchoolUser(UserId) NOT NULL,
	   Class INT NOT NULL,
	   Description NVARCHAR(MAX),
	   TotalMarks INT NOT NULL,
	   TimeAllowedMinutes INT NOT NULL,
	   CreatedDate DATETIME NOT NULL DEFAULT GETDATE()
);

-------//ADD QuestionType Sample or Real //------

----------------------Question--------------------------------------
CREATE TABLE Questions (
    QuestionId INT PRIMARY KEY IDENTITY(1,1),
	PaperId INT FOREIGN KEY REFERENCES QuestionPaper(PaperId) NOT NULL,
	Marks INT NOT NULL,
    QuestionText NVARCHAR(MAX) NOT NULL,
    A NVARCHAR(MAX),
    B NVARCHAR(MAX),
    C NVARCHAR(MAX),
    D NVARCHAR(MAX),
    Answer VARCHAR(5)
);
 
 select * from IExam;

 SELECT COUNT(*) AS TotalExams
                FROM IExam
                WHERE UserId = 190 AND ExamStatus = 0;

---------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE MESSAGE (
    MessageId INT PRIMARY KEY IDENTITY(1,1),
    SenderId INT NOT NULL,
    ReceiverId INT NOT NULL,
    Text VARCHAR(MAX) NOT NULL,
    DateAndTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_Message_SenderId FOREIGN KEY (SenderId) REFERENCES SchoolUser(UserId),
    CONSTRAINT FK_Message_ReceiverId FOREIGN KEY (ReceiverId) REFERENCES SchoolUser(UserId)
);


------------------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE QPattern (
	IExamId INT FOREIGN KEY REFERENCES IExam(IExamId) NOT NULL,
	QPatternId INT PRIMARY KEY IDENTITY(1,1),
	Chapter NVARCHAR(MAX) NOT NULL,
	TQuestions INT NOT NULL,
	MarkAllocated INT NOT NULL,
);
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE IExam (
	IExamId INT PRIMARY KEY IDENTITY(1,1),
	UserId INT FOREIGN KEY REFERENCES SchoolUser(UserId) NOT NULL,
	SubjectId INT FOREIGN KEY REFERENCES Subjects(SubjectId) NOT NULL,
	Class INT NOT NULL,
	FullMark INT NOT NULL,
	PassMark INT NOT NULL,
	ExamDate Date NOT NULL,
	StartTime Time NOT NULL,
	ExamDuration INT NOT NULL,
	ExamDescription NVARCHAR(MAX) NOT NULL,
	ExamStatus INT DEFAULT '0'
);
SELECT SUM(E.IMark) AS MarkObtained, I.FullMark, I.PassMark, I.Class, S.SubjectName, I.ExamDescription, I.ExamDate,
                    CASE 
                        WHEN (SUM(E.IMark) * 100.0 / I.FullMark) >= 90.0 THEN 'A+'
                        WHEN (SUM(E.IMark) * 100.0 / I.FullMark) >= 80.0 THEN 'A'
                        WHEN (SUM(E.IMark) * 100.0 / I.FullMark) >= 70.0 THEN 'B+'
                        WHEN (SUM(E.IMark) * 100.0 / I.FullMark) >= 60.0 THEN 'B'
                        WHEN (SUM(E.IMark) * 100.0 / I.FullMark) >= 50.0 THEN 'C'
                        WHEN (SUM(E.IMark) * 100.0 / I.FullMark) >= 40.0 THEN 'C+'
                        ELSE 'No Grade'
                    END AS Grade
                FROM Answer A
                INNER JOIN EQuestions E ON A.EQuestionId = E.EQuestionId AND A.Answer = E.CorrectAnswer
                INNER JOIN IExam I ON E.IExamId = I.IExamId
                INNER JOIN Subjects S ON I.SubjectId = S.SubjectId
                WHERE A.UserId = 170 
                GROUP BY I.Class, S.SubjectName, I.ExamDescription, I.ExamDate, I.FullMark, I.PassMark;





CREATE TABLE EQuestions (
	EQuestionId INT PRIMARY KEY IDENTITY(1,1),
	IExamId INT FOREIGN KEY REFERENCES IExam(IExamId) NOT NULL,
	Question NVARCHAR (MAX) NOT NULL,
	IMark INT NOT NULL,
	OptionA NVARCHAR (MAX) NOT NULL,
	OptionB NVARCHAR (MAX) NOT NULL,
	OptionC NVARCHAR (MAX) NOT NULL,
	OptionD NVARCHAR (MAX) NOT NULL,
	CorrectAnswer CHAR(10) NOT NULL,
);

	CREATE TABLE AppearStatus(
		IExamId INT FOREIGN KEY REFERENCES IExam(IExamId) NOT NULL,
		UserId INT FOREIGN KEY REFERENCES SchoolUser(UserId) NOT NULL,
		AppearanceStatus INT DEFAULT 0
	);

CREATE TABLE Answer(
	AnswerId INT PRIMARY KEY IDENTITY(1,1),
	EQuestionId INT FOREIGN KEY REFERENCES EQuestions(EQuestionId) NOT NULL,
	UserId INT FOREIGN KEY REFERENCES SchoolUser(UserId) NOT NULL,
	Answer CHAR(1) NOT NULL,
	IsSubmitted INT DEFAULT 0
);
select * from Answer;

INSERT INTO Answer (EQuestionId, UserId, Answer, IsSubmitted) VALUES (7, 170, 'OptionA', 1);
select * from Result;
CREATE TABLE Result(
	ResultId INT PRIMARY KEY IDENTITY(1,1),
	IExamId INT FOREIGN KEY REFERENCES IExam(IExamId) NOT NULL,
	UserId INT FOREIGN KEY REFERENCES SchoolUser(UserId) NOT NULL,
	MarkObtained INT NOT NULL,
	ResultStatus VARCHAR(20) NOT NULL
);

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
SELECT eq.Question, eq.OptionA, eq.OptionB, eq.OptionC, eq.OptionD, eq.CorrectAnswer, a.Answer
            FROM EQuestions eq
            INNER JOIN Answer a ON eq.EQuestionId = a.EQuestionId
            WHERE eq.IExamId = 4 AND a.UserId = 170;

			Select * from EQuestions;

SELECT *
FROM IExam
INNER JOIN EQuestions ON IExam.IExamId = EQuestions.IExamId
ORDER BY IExam.Class, IExam.ExamDate ASC;


SELECT eq.Question, eq.OptionA, eq.OptionB, eq.OptionC, eq.OptionD,  a.Answer, eq.CorrectAnswer,
FROM EQuestions eq
INNER JOIN Answer a ON eq.EQuestionId = a.EQuestionId
WHERE eq.IExamId = 1 AND a.StudentId = 21212;

SELECT s.Class, u.UserId
FROM SchoolUser u
INNER JOIN Student s ON u.UserId = s.UserId
WHERE u.EmailId = 'simantchaudhary23@gmail.com';


SELECT su.UserId, st.Grade
FROM SchoolUser su
INNER JOIN Student st ON su.UserId = st.UserId
WHERE su.EmailId = 'supchan321@gmail.com';

SELECT 
    q.Marks,
    q.QuestionText,
    q.A,
    q.B,
    q.C,
    q.D,
    q.Answer
FROM Questions q
WHERE q.PaperId = PaperId;


SELECT 
    s.SubjectName, 
    su.FullName AS CreatedBy, 
    qp.Description, 
    qp.TotalMarks, 
    qp.TimeAllowedMinutes AS Minutes, 
    qp.CreatedDate
FROM QuestionPaper qp
JOIN Subjects s ON qp.SubjectId = s.SubjectId
JOIN SchoolUser su ON qp.UserId = su.UserId
WHERE qp.PaperId = PaperId;

-------------Get all Notice------------------
SELECT n.NoticeId, n.Title, n.Content, n.PostedAt, u.FullName, u.Type 
FROM Notice n 
INNER JOIN SchoolUser u ON n.UserId = u.UserId;

--------------Get one notice on the basis of notice Id---------
SELECT n.NoticeId, n.Title, n.Content, n.PostedAt, u.FullName, u.Type
FROM Notice n
INNER JOIN SchoolUser u ON n.UserId = u.UserId
WHERE n.NoticeId = NoticeId;


SELECT s.SubjectName, su.FullName AS CreatedBy, qp.PaperId,qp.Description, qp.TotalMarks, qp.TimeAllowedMinutes, qp.CreatedDate FROM QuestionPaper qp JOIN Subjects s ON qp.SubjectId = s.SubjectId JOIN SchoolUser su ON qp.UserId = su.UserId ORDER BY CreatedDate DESC;



INSERT INTO SchoolUser (EmailId, FullName, Phone, Gender, Type, Address, Password, IsActive, IsApproved)
VALUES ('tirupatischool123@gmail.com','Tirupati English Boarding High School','+97714164307', '---', 'Admin', 'Budhanilkanth-10, Kathmandu Nepal', 'Tirupati703#', 1, 1);
SELECT * FROM SchoolUser;

----------------------------------------------------Admin---------------------------------------------------------------
------To get the total Users List----------------------
SELECT 
    COUNT(*) AS Total_Users, 
    SUM(CASE WHEN Type = 'Student' THEN 1 ELSE 0 END) AS Total_Students, 
    SUM(CASE WHEN Type = 'Teacher' THEN 1 ELSE 0 END) AS Total_Teachers
FROM 
    SchoolUser
WHERE 
    IsApproved = 1;

	-----------------Total Exam Created------------------------------------------
	SELECT COUNT(*) AS TotalExamsCreated FROM IExam;

	----------------------------Total Exam Conducted----------------------------

	SELECT COUNT(*) AS total_exams
FROM IExam
WHERE ExamStatus = 1;
------------------------	Total Notice-----------------------------------------
SELECT COUNT(*) AS TotalNotices
FROM Notice;
---------------------------------------Total Sample Question Posted----------------
SELECT COUNT(*) AS Total_SampleQuestion
FROM QuestionPaper;


----------------------
SELECT ExamStatus, COUNT(*) as TotalCount
FROM IExam
GROUP BY ExamStatus;


SELECT u.Type, 
       SUM(CASE WHEN l.IsActive = 1 THEN 1 ELSE 0 END) AS Active, 
       SUM(CASE WHEN l.IsActive = 0 THEN 1 ELSE 0 END) AS Inactive 
FROM SchoolUser u 
JOIN Login l ON u.UserId = l.UserId 
GROUP BY u.Type;


SELECT 
    'Notices' AS `Type`, COUNT(*) AS `Count`
FROM 
    `Notice`
UNION ALL
SELECT 
    'Question Papers' AS `Type`, COUNT(*) AS `Count`
FROM 
    `QuestionPaper`
UNION ALL
SELECT 
    'Exams' AS `Type`, COUNT(*) AS `Count`
FROM 
    IExam`;



	select sum(E.IMark) MarkObtained from Answer A
                inner join EQuestions E on A.EQuestionId=E.EQuestionId and A.Answer=E.CorrectAnswer
                where UserId = 170 and E.IExamId= 4  Group by E.IMark



				SELECT COUNT(*) AS TotalSample
                             FROM QuestionPaper;

							 SELECT COUNT(*) AS TotalNotice
                             FROM Notice;

							 SELECT COUNT(*) AS TotalExams
                             FROM IExam
                             WHERE ExamStatus = 0;

							 SELECT COUNT(*) AS TotalExams
                             FROM IExam
                             WHERE ExamStatus = 1




SELECT
  su.UserType,
  COUNT(DISTINCT CASE WHEN mt.Type = 'Teacher' THEN mt.sender_id ELSE NULL END) AS teacher_messages_sent,
  COUNT(DISTINCT CASE WHEN mt.Type = 'Student' THEN mt.sender_id ELSE NULL END) AS student_messages_sent,
  COUNT(DISTINCT CASE WHEN mt.Type = 'Teacher' THEN mt.receiver_id ELSE NULL END) AS teacher_messages_received,
  COUNT(DISTINCT CASE WHEN mt.Type = 'Student' THEN mt.receiver_id ELSE NULL END) AS student_messages_received,
  COUNT(DISTINCT CASE WHEN ec.UserId = 'Teacher' THEN ec.exam_id ELSE NULL END) AS exams_conducted_by_teacher,
  COUNT(DISTINCT CASE WHEN ec.UserId = 'Student' THEN ec.exam_id ELSE NULL END) AS exams_conducted_by_student,
  COUNT(DISTINCT CASE WHEN ea.UserId = 'Teacher' THEN ea.exam_id ELSE NULL END) AS exams_attended_by_teacher,
  COUNT(DISTINCT CASE WHEN ea.UserId = 'Student' THEN ea.exam_id ELSE NULL END) AS exams_attended_by_student,
  COUNT(DISTINCT CASE WHEN q.UserId = 'Teacher' THEN q.QuestionId ELSE NULL END) AS questions_posted_by_teacher,
  COUNT(DISTINCT CASE WHEN q.UserId = 'Student' THEN q.QuestionId ELSE NULL END) AS questions_posted_by_student,
  COUNT(DISTINCT CASE WHEN n.UserId = 'Student' THEN n.NoticeId ELSE NULL END) AS notices_posted_by_teacher,
  COUNT(DISTINCT CASE WHEN n.UserId = 'Teacher' THEN n.NoticeId ELSE NULL END) AS notices_posted_by_teacher
FROM
  SchoolUser su
  LEFT JOIN Message mt ON su.UserID = mt.SenderId OR su.UserID = mt.ReceiverId
  LEFT JOIN IExam ec ON su.UserId = ec.UserId OR su.UserId = ec.UserId
  LEFT JOIN IExam ea ON su.UserId = ea.UserId
  LEFT JOIN Questions q ON su.UserId = q.UserId
  LEFT JOIN Notice n ON su.UserId = n.UserId
WHERE
  su.Type IN ('Teacher', 'Student')
GROUP BY
  su.Type;


  SELECT * FROM IExam;


SELECT 
    CASE 
        WHEN u.Type = 'Teacher' THEN 'Teacher'
        WHEN u.Type = 'Student' THEN 'Student'
        ELSE 'Unknown'
    END AS UserType,
    COUNT(*) AS Count
FROM 
    (
        SELECT m.SenderId, m.ReceiverId FROM MESSAGE m UNION
        SELECT e.UserId, NULL FROM IExam e WHERE e.ExamStatus = 1 OR e.ExamStatus = 1 UNION
        SELECT qp.UserId, NULL FROM QuestionPaper qp UNION
        SELECT n.UserId, NULL FROM Notice n UNION
        SELECT e.UserId, NULL FROM IExam e WHERE e.ExamStatus = 0 
    ) AS actions
    RIGHT JOIN SchoolUser u ON actions.SenderId = u.UserId OR actions.ReceiverId = u.UserId
GROUP BY 
    CASE 
        WHEN u.Type = 'Teacher' THEN 'Teacher'
        WHEN u.Type = 'Student' THEN 'Student'
        ELSE 'Unknown'
    END;


---------------------Teacher and Student Activeness-------------------------------------------------
SELECT 
    CASE 
        WHEN u.Type = 'Teacher' THEN 'Teacher'
        WHEN u.Type = 'Student' THEN 'Student'
        ELSE 'Admin'
    END AS UserType,
    COUNT(*) AS Count
FROM 
    (
        SELECT m.SenderId, m.ReceiverId FROM MESSAGE m UNION
        SELECT e.UserId, NULL FROM IExam e WHERE e.ExamStatus = 1 UNION
        SELECT qp.UserId, NULL FROM QuestionPaper qp UNION
        SELECT n.UserId, NULL FROM Notice n UNION
        SELECT e.UserId, NULL FROM IExam e WHERE e.ExamStatus = 0 
    ) AS actions
    RIGHT JOIN SchoolUser u ON actions.SenderId = u.UserId OR actions.ReceiverId = u.UserId
GROUP BY 
    CASE 
        WHEN u.Type = 'Teacher' THEN 'Teacher'
        WHEN u.Type = 'Student' THEN 'Student'
        ELSE 'Admin'
    END;



	SELECT COUNT(*) AS TotalNotice
                FROM Notice
                WHERE UserId = 190;



				SELECT COUNT(*) AS TotalNotice
                FROM Notice
                WHERE UserId = 190;
				SELECT COUNT(*) AS TotalExams
                             FROM IExam
                             WHERE ExamStatus = 0 OR ExamStatus = 1

				Select * from IExam where AnswerId = 25;




