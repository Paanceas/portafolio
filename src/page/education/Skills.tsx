import CountUp from 'react-countup';

interface Skill {
  name: string;
  numberPercent: string;
  startCount: number;
  endCount: number;
}

const skillContent: Skill[] = [
  {
    name: 'Angular',
    numberPercent: '92',
    startCount: 0,
    endCount: 92,
  },
  {
    name: 'React JS',
    numberPercent: '85',
    startCount: 0,
    endCount: 85,
  },
  {
    name: 'Typescript - Javascript',
    numberPercent: '95',
    startCount: 0,
    endCount: 95,
  },
  {
    name: 'Node',
    numberPercent: '90',
    startCount: 0,
    endCount: 90,
  },
  {
    name: 'Java SpringBoot',
    numberPercent: '80',
    startCount: 0,
    endCount: 80,
  },
  {
    name: 'AWS',
    numberPercent: '60',
    startCount: 0,
    endCount: 60,
  },
];

export const Skills = () => {
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp start={skill.startCount} end={skill.endCount} duration={1} redraw={true}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div className="skill-bar-in" style={{ width: skill.numberPercent + '%' }}></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};
