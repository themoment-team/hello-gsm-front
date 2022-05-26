import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import axios from 'axios';

export interface applicantsType {
  data: {
    registrationNumber: number;
    name: string;
    screening: string;
    schoolName: string;
    isDocumentReception: boolean;
    phoneNumber: string;
    guardianNumber: string;
    teacherNumber: string;
  }[];
}

const Home: NextPage<applicantsType> = ({ data }) => <MainPage data={data} />;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      'https://admin.hellogsm.kr/data/mockData.json',
    );
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
      redirect: { destination: 'signin' },
    };
  }
};

export default Home;
