import os
from datetime import datetime

from about.models import About
from experience.models import Experience
from skills.models import Skills
from django.contrib.auth.models import User

ABOUT = """
I'm a software engineer with roots tracing back to Nepal. In 2018, I earned my Bachelor's degree in Computer Engineering from The City College of New York, 
marking the beginning of my journey. My leap of faith led me to pursue education and opportunity in the United States. 
Since then, I've immersed myself in the dynamic world of coding, where every line is a chance to innovate and problem-solve. 
Off-screen, you'll find me on the soccer field or lost in the melodies of music, cherishing life's diverse experiences with boundless enthusiasm.
"""
DESCRIBE_ME = [
    "Hi, my name is Chhewang Sherpa.",
    "Guy who loves coding and coffee.",
    "<ButLovesSoccerMore/>",
]

EXPERIENCE = [
    {
        "title": "Software Engineer",
        "company": "L3Harris",
        "start_date": "09/2019",
        "end_date": "",
        "description": [
            """
            Worked as a core developer in developing a web application in Data Science 
            and Architecture team and led the design of software architecture, backend implementation, database setup, and
            its deployment using technologies like Docker, python/Django framework, psql, JavaScript,
            React, and Redux.
            """,
            """
            Spearheaded Continuous Integration/Continuous Deployment (CI/CD) tool adoption, serving as
            the Point of Contact (POC) for the team, managing processes, writing technical documentation,
            and troubleshooting guides for knowledge sharing.
            """,
            """
            Led the design and development of a pilot project, creating a service for system engineers to
            automate requirement capture, data lineage, and requirements hierarchy on JIRA from Magic
            Draw, leveraging teamwork cloud API and message queue service with Docker, Python, Kafka,
            Magic Draw, Teamwork Clouds, and JIRA.            
            """,
        ],
    },
    {
        "title": "Software Engineer Intern",
        "company": "Naval Undersea Warfare Center Keyport Division",
        "start_date": "06/2019",
        "end_date": "08/2019",
        "description": [
            """
            Implemented data modeling and data filtering algorithms on CLASSIFIED raw data using tools
            and libraries like python, jupyter notebook, scikit-learn, and pandas.
            """
        ],
    },
    {
        "title": "NOAA Undergraduate Scholar",
        "company": "NOAA-CREST",
        "start_date": "06/2018",
        "end_date": "12/2018",
        "description": [
            """
            Gathered and preprocessed data to facilitate the creation and presentation of statistical models using R Studio and its libraries.
            """,
            """
            Developed an automated image scroll for temporal results visualization and
            data patterns exploration to support research hypothesis using R and its visualization library.
            """,
        ],
    },
]

SKILLS = [
    {
        "name": "Python",
        "description": """
            Python is an interpreted, high-level, general-purpose programming language.
            It is dynamically typed and garbage-collected.
            It supports multiple programming paradigms, including object-oriented, imperative, functional, and procedural,
            and has a large and comprehensive standard library.
            """,
        "skill_level": 90,
    },
    {
        "name": "Django",
        "description": """
            Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.
            Built by experienced developers, it takes care of much of the hassle of Web development,
            so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.
            """,
        "skill_level": 80,
    },
    {
        "name": "React",
        "description": """
            React is a JavaScript library for building user interfaces.
            It is maintained by Facebook and a community of individual developers and companies.
            React can be used as a base in the development of single-page or mobile applications.
            """,
        "skill_level": 80,
    },
    {
        "name": "git",
        "description": """
            Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
            """,
        "skill_level": 80,
    },
    {
        "name": "Docker",
        "description": """
            Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
            Containers are isolated from one another and bundle their own software, libraries and configuration files;
            they can communicate with each other through well-defined channels.
            """,
        "skill_level": 80,
    },
    {
        "name": "teamCity",
        "description": """
            TeamCity is a continuous integration and continuous delivery (CI/CD) server.
            """,
        "skill_level": 80,
    },
    {
        "name": "Redux",
        "description": """
            Redux is a predictable state container for JavaScript apps.
            It helps you write applications that behave consistently, run in different environments (client, server, and native),
            and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
            """,
        "skill_level": 70,
    },
    {
        "name": "PostgreSQL",
        "description": """
            PostgreSQL is a powerful, open source object-relational database system.
            It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness.
            """,
        "skill_level": 70,
    },
]


# Define function to populate About model
def populate_about():
    about_instance = About()
    about_instance.bio = ABOUT
    about_instance.describe_me = DESCRIBE_ME

    about_instance.save()


def populate_experience():
    experience = Experience()

    # Iterate over the EXPERIENCE list and create Experience instances

    for exp_data in EXPERIENCE:
        # Convert start and end dates to datetime objects
        start_date_str = exp_data["start_date"]
        end_date_str = exp_data["end_date"]

        if start_date_str:
            start_date = datetime.strptime(start_date_str, "%m/%Y")
        else:
            start_date = None

        if end_date_str:
            end_date = datetime.strptime(end_date_str, "%m/%Y")
        else:
            end_date = None

        # Create the Experience instance
        experience = Experience(
            title=exp_data["title"],
            company=exp_data["company"],
            start_date=start_date,
            end_date=end_date,
            description=exp_data["description"],
        )

        # Save the instance to the database
        experience.save()


def populate_skills():
    skill = Skills()
    for skill_data in SKILLS:
        skill = Skills(
            name=skill_data["name"],
            description=skill_data["description"],
            skill_level=skill_data["skill_level"],
        )
        skill.save()


def populate_users():
    User.objects.create_user(
        email=os.getenv("USER_EMAIL"),
    )


# Populate the About model
populate_about()
populate_experience()
populate_skills()
