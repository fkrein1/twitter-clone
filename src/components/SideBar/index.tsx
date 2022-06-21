import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="Who to follow"
            elements={[
              <FollowSugestion
                name="Sophie Alpert"
                nickname="@sophiebits"
              />,
              <FollowSugestion
                name="Wes Bos"
                nickname="@wesbos"
              />,
              <FollowSugestion
                name="Wassim Chegham"
                nickname="@manekinekko"
              />,
              <FollowSugestion
                name="Andrew Clark"
                nickname="@acdlite"
              />,
            ]}
          />
          <List 
            title="What&apos;s happening"
            elements={[
              <News
                title="EY&apos;s Breakup Plan Means Windfalls for Partners"
                description="Ernst &amp; Young&apos;s plan to split its audit and consulting businesses would give thousands of its partners multimillion-dollar payouts and relies on optimistic assumptions for growth to justify the deal."
              />,
              <News
                title="Biden Near Decision on Backing Federal Gas-Tax Holiday"
                description="Any suspension in the federal gas tax of 18.4 cents a gallon would require action from Congress. So far, Democratic-led efforts to temporarily pause collecting the tax have failed to gain traction."
              />,
              <News
                title="JetBlue Lifts Offer for Spirit, Commits to Selling Assets"
                description="Spirit had postponed a shareholders&apos; vote on merger with Frontier as it weighs competing offer from JetBlue."
              />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
    );
}

export default SideBar;