import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getClan } from "../api/cocApi";

import Loader from "../components/common/Loader";

import PageContainer from "../components/ui/PageContainer";
import ClanHeader from "../components/clan/ClanHeader";
import ClanStats from "../components/clan/ClanStats";
import MemberList from "../components/clan/MemberList";

export default function Clan() {

    const { tag } = useParams();

    const [clan, setClan] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchClan() {

            try {

                const data = await getClan(tag);

                setClan(data);

            }

            finally {

                setLoading(false);

            }

        }

        fetchClan();

    }, [tag]);

    if (loading)
        return <Loader />;

    return (

        <PageContainer>

          <ClanHeader clan={clan} />

          <ClanStats clan={clan} />

          <MemberList clan={clan} />

      </PageContainer>

    );

}