import React from 'react';
import './like-buttons.scss';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

interface IProps {
   onClickVote: (value: number) => void;
   onClickFavorite: () => void;
   isDisabled: boolean;
   isAddedToFavorites: boolean;
}

export default function LikeButtons({
   onClickVote,
   onClickFavorite,
   isDisabled,
   isAddedToFavorites,
}: IProps) {
   return (
      <div className="like-buttons">
         <Button
            className="mint"
            width={80}
            height={80}
            onClick={() => onClickVote(1)}
            isDisabled={isDisabled}
         >
            <Icon
               name="icon-like"
               width={30}
               height={30}
            />
         </Button>
         <Button
            className={isAddedToFavorites ? 'pink added-to-fav' : 'pink'}
            width={80}
            height={80}
            onClick={onClickFavorite}
            isDisabled={isDisabled}
         >
            {isAddedToFavorites ? (
               <Icon
                  name="icon-heart-fill"
                  width={30}
                  height={30}
                  className="icon filled"
               />
            ) : (
               <Icon
                  name="icon-favorite"
                  width={30}
                  height={30}
                  className="icon stroke"

               />
            )}
         </Button>
         <Button
            className="orange"
            width={80}
            height={80}
            onClick={() => onClickVote(-1)}
            isDisabled={isDisabled}
         >
            <Icon
               name="icon-dislike"
               width={30}
               height={30}
            />
         </Button>
      </div>
   );
}
