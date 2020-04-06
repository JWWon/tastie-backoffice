import React from 'react';

import {Props} from './Status.type';
import * as s from './Status.style';

const Status: React.FC<Props> = ({status}) => <s.Status status={status} />;

export default Status;
