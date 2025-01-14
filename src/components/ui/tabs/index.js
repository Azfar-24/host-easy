import React from 'react';
import Button from '../button';

const Tabs = ({
  customCls,
  data,
  active,
  handleClick = () => {},
  showIconText = '',
  showIcon = false,
  iconClass = '',
  type = 'text',
  objKey,
  disabledData = ''
}) => {
  let foo = `#`;
  const activeClass = (name) => {
    return name === active ? 'active' : '';
  };
  return (
    <>
      <div className={`tabs__wrap ${customCls ? customCls : ''}`}>
        {type === 'text' ? (
          <ul>
            {data?.map((name, index) => (
              <li key={index}>
                <Button
                  classes={`${activeClass(name)} ${
                    !Array.isArray(disabledData)
                      ? disabledData === name
                        ? 'disabled'
                        : ''
                      : disabledData.includes(name)
                      ? 'disabled'
                      : ''
                  }`}
                  disabled={
                    !Array.isArray(disabledData)
                      ? disabledData === name
                      : disabledData.includes(name)
                      ? true
                      : false
                  }
                  onClick={() => handleClick(name)}
                  transKey={name}
                >
                  {name}
                  {showIconText === name && showIcon && <i className={iconClass}></i>}
                </Button>
              </li>
            ))}
          </ul>
        ) : type === 'object' ? (
          <ul>
            {data?.map((item, index) => (
              <li key={index}>
                <Button
                  classes={activeClass(item.id)}
                  onClick={() => {
                    handleClick(item.id);
                  }}
                  transKey={item[objKey]}
                >
                  {item.text}
                  {showIconText === item.id && showIcon && <i className={iconClass}></i>}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Tabs;
