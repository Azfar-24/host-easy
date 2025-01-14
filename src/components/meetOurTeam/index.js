import SectionWrap from 'components/sectionWrap';
import Anchor from 'components/ui/anchor';
import Media from 'components/ui/media';
import Typo from 'components/ui/typo';
import React from 'react';

const MeetOurTeam = ({ data }) => {
  return (
    <>
      <SectionWrap heading={{ heading: data.section_heading }}>
        <div className='meetOurTeam__wrap'>
          <div className='meetOurTeam__container'>
            {data.data.map((item, index) => {
              return (
                <div key={index} className='meetOurTeam__box'>
                  {item.thumbnail && (
                    <div className='meetOurTeam__box-thumb'>
                      <Media imgSrc={item.thumbnail} />
                    </div>
                  )}
                  <div className='meetOurTeam__box-grid'>
                    <div className='meetOurTeam__box-content'>
                      <Typo component={'h2'} className='meetOurTeam__box-title'>
                        {item.title}
                      </Typo>
                      <Typo component={'h3'} className='meetOurTeam__box-designation'>
                        {item.designation}
                      </Typo>
                    </div>
                    <Anchor
                      variant={'onlyIcon'}
                      hyperLink={item.url}
                      iconCls={'he1-star_fill'}
                    ></Anchor>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrap>
    </>
  );
};

export default MeetOurTeam;
