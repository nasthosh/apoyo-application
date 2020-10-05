const disorder = [
    {
        id: 1,
        disorder_name: "Anxiety",
        disorder_short_desc: "Feeling anxious and fearful is part of being human",
        disorder_full_desc: " Feeling anxious and fearful is part of being human. \n" +
            "These feelings help you be alert for and escape from threats, and help you make better decisions.\n" +
            " If you have an anxiety disorder, you may feel anxious or fearful in situations where there are no threats.",
        disorder_image: "https://cdn.pixabay.com/photo/2019/01/04/09/19/depression-3912748__340.jpg"
    },
    {
        id: 2,
        disorder_name: "Bipolar",
        disorder_short_desc: "Experiencing changes in your mood is part of being human",
        disorder_full_desc: " Experiencing changes in your mood is part of being human. However, if you have bipolar disorder, your mood changes will be more extreme and may last for longer periods. You are likely to experience two highly contrasting mood states – mania and depression.\n",
        disorder_image: "https://cdn.pixabay.com/photo/2018/05/28/15/13/mental-3436232__340.jpg"
    },
    {
        id: 3,
        disorder_name: "Depression",
        disorder_short_desc: "It's a normal response to life events, and part of what makes us human",
        disorder_full_desc: " We all feel sad or down from time to time;\n" +
            " it's a normal response to life events, and part of what makes us human.\n" +
            " Depression is constant and persistent feelings of sadness and hopelessness.\n" +
            " These feelings can make you lose interest in the important things in your life. \n" +
            "They can also make activities that you used to enjoy seem like too much effort.\n" +
            " You may become irritable, and spend less time with friends and family.",
        disorder_image: "https://cdn.pixabay.com/photo/2014/11/02/09/15/despair-513529_960_720.jpg"
    },
    {
        id: 4,
        disorder_name: "Eating",
        disorder_short_desc: "An eating disorder is about much more than food; it is a mental illness",
        disorder_full_desc: " An eating disorder is about much more than food; it is a mental illness. Unhealthy eating behaviours and relentless thoughts about food are symptoms of more complex issues. Your eating behaviours may have developed as a way of dealing with things in your life that feel out of control, or they may be a way of coping with troubling emotions.\n" +
            "\n" +
            "Eating in the way your disorder compels you to can make you feel guilty, ashamed, and disgusted. Your hidden feelings about your eating may lead you to deny your behaviours, or hide them from yourself and others.",
        disorder_image: "https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685__340.jpg"
    },
    {
        id: 5,
        disorder_name: "Personality",
        disorder_short_desc: "Our personality is expressed through the way we think, behave, and relate to others",
        disorder_full_desc: " Our personality is expressed through the way we think, behave, and relate to others. It may be influenced by relationships with primary caregivers, life experiences, and our own individual nature.\n" +
            "\n" +
            "By adulthood, your personality has developed with quite stable and predictable traits. Although moods can change as often as the weather, personality is like the ever-present blue sky above the clouds.",
        disorder_image: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084__340.jpg"
    },
    {
        id: 6,
        disorder_name: "Drugs, Alcohol and Substance Related",
        disorder_short_desc: "Misuse of substances such as alcohol and drugs puts you at risk of physical and psychological harm",
        disorder_full_desc: " People rely on substances for many reasons: for fun, to be social with friends, to deal with stressful situations, or to escape from other things going on in their lives.\n" +
            "\n" +
            "Misuse of substances such as alcohol and drugs puts you at risk of physical and psychological harm, both short-term and long-term. Addictions aren’t limited to alcohol and drugs; they include gambling, smoking, shopping, gaming, and sex, among other things.",
        disorder_image: "https://cdn.pixabay.com/photo/2014/08/26/20/08/alcohol-428392__340.jpg"
    },
    {
        id: 7,
        disorder_name: "Schizophrenia and psychotic",
        disorder_short_desc: "A psychotic disorder involves a disconnection from reality",
        disorder_full_desc: " A psychotic disorder involves a disconnection from reality. Psychosis is a group of related symptoms that seriously affect how you think, feel, and behave. \n" +
            "\n" +
            "Experiencing symptoms of psychotic disorders can lead to confusion and feeling misunderstood. Psychotic episodes, and the feelings that come with them, can get in the way of work, relating to family and friends, studying, and managing a home.",
        disorder_image: "https://cdn.pixabay.com/photo/2014/07/10/08/38/schizophrenia-388871__340.jpg"
    },
    {
        id: 8,
        disorder_name: "Trauma and Stress",
        disorder_short_desc: "Post Traumatic Stress",
        disorder_full_desc: " We are all likely to experience or witness something shocking, scary or dangerous at some point in our lives. Each of us is unique in the ways we respond to and recover from these traumatic or stressful events.",
        disorder_image: "https://cdn.pixabay.com/photo/2017/01/22/16/56/ambulance-2000195_960_720.jpg"
    }
];

const practitioners = [
    { id: 1, name: "santhosh", desc: "melbourne" },
    { id: 2, name: "karthik", desc: "cranbourne" },
    { id: 3, name: "vignesh", desc: "clayton" }
];


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
    disorder,
    practitioners
};
