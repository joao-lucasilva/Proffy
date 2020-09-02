const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: '89988775',
        bio: "Instrutor de esucação Fisica"
    }
    classValue = {
        subject: 1,
        cost: "20"
        //PRoffy_id virá pelo banco de dados
    }
    classScheduleValues = [{
        //class_id virá pelo banco de dados após cadastrar a aula
        weekday: 1,
        time_from: 720,
        time_to: 1220
    }, {
        weekday: 3,
        time_from: 520,
        time_to: 1200
    }]
    // await createProffy(db, {
    //     proffyValue,
    //     classValue,
    //     classScheduleValues
    // })
    //Consultar os dados inseridos

    //todos os proffys
    const selectProffys = await db.all("SELECT * FROM proffys")

    //Consultar as classes de um determinado professor e trazer junto os dados dele
    const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys);

    //horario de pesquisa precisa estar entre o time_from e o time_to, para que retorne o proffy
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "720";
    `)
    // console.log(selectClassesSchedules)
})