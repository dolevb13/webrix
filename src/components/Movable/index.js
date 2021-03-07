/**
 * Copyright (c) 2020, Amdocs Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Movable from './Movable';
import {useMove, useMoveArea, operation} from './Movable.hooks';
import * as Constraints from './Movable.constraints';

Movable.useMove = useMove;
Movable.useMoveArea = useMoveArea;
Movable.Constraints = Constraints;
Movable.createConstraint = operation;

export default Movable;
