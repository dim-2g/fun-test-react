import React from "react";
import {CSSTransition} from "react-transition-group";
import classNames from "classnames";
import Parser from "html-react-parser";

export const Card = (props) => {
    const { item } = props;
    let cls = classNames({
        'package': true,
        'package--selected': item.selected,
        'package--disabled': item.disabled,
        'package--selected-hover': item.selected && item.hover,
        'package--hover': item.hover && !item.selected,
    });
    let packageInfo = Parser(item.info);
    let clickHandler = !item.disabled
        ? { onClick: e => props.onClick(e, item.id) }
        : {};
    return (
        <div className="packages__item">
            <div className={cls}>
                <div className="package__card"
                     {...clickHandler}
                     onMouseLeave={e => props.onLeave(e, item.id)}
                     onMouseEnter={e => props.onEnter(e, item.id)}
                >
                    <div className="package__top">
                        <div className="package__header"></div>
                    </div>
                    <div className="package__middle">
                        <div className="package__body">
                            <div className="package__description">
                                <CSSTransition in={!item.hover && item.selected} timeout={400} classNames="my-node">
                                    <div className="package__description--default">
                                        {item.textDescription}
                                    </div>
                                </CSSTransition>
                                <CSSTransition in={item.hover} timeout={400} classNames="my-node">
                                    <div className="package__description--selected-hover">
                                        {item.textDescriptionSelectedHover}
                                    </div>
                                </CSSTransition>
                            </div>
                            <div className="package__name">
                                {item.name}
                            </div>
                            <div className="package__name-with">
                                {item.with}
                            </div>
                            <div className="package__info">
                                {packageInfo}
                            </div>
                        </div>
                        <div className="package__cat"
                             style={{backgroundImage: "url('/assets/template/images/package__cat.png')"}}></div>
                        <div className="package-volume">
                            <div className="package-volume__digits">
                                {item.volumeDigits}
                            </div>
                            <div className="package-volume__unit">
                                {item.volumeUnit}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="package__call">
                    <div className="package__call--default">
                        Чего сидишь? Порадуй котэ, <a href="#" {...clickHandler}>купи.</a>
                    </div>
                    <div className="package__call--selected">
                        {item.textCallSelected}
                    </div>
                    <div className="package__call--disabled">
                        {item.textCallDisabled}
                    </div>
                </div>
            </div>
        </div>
    );
};