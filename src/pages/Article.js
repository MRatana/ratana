import React from 'react';
import './Article.css';
import { useTranslation } from 'react-i18next';

function Article() {

  const { t } = useTranslation();

  return (
    <div className="Article-page">

      <div className='Article'>
        <div className='line-h'></div>
        <div className='arti'>{t("article")}</div>
        <div className='line-h'></div>
      </div>

    </div>
  );
}

export default Article;