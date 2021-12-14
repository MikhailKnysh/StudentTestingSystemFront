import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import {User} from "../../config";
import {Link, MenuItem, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";

type Props = {
    students: User[],
    themeId: string
}

function not(a: readonly User[], b: readonly User[]) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly User[], b: readonly User[]) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: readonly User[], b: readonly User[]) {
    return [...a, ...not(b, a)];
}

export function TransferList(props: Props) {
    const {students, themeId} = props;
    const [checked, setChecked] = React.useState<User[]>([]);
    const [left, setLeft] = React.useState<User[]>([]);
    const [right, setRight] = React.useState<User[]>(students);
    const [prepairingLevel, setPreparingLevel] = React.useState<number>(35);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    React.useEffect(() => {
        setLeft([]);
        setRight(students);
        setChecked([]);
    }, [students])

    const handleToggle = (value: User) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items: readonly User[]) =>
        intersection(checked, items).length;

    const handleToggleAll = (items: readonly User[]) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (title: React.ReactNode, items: readonly User[]) => (
        <Card>
            <CardHeader
                sx={{ px: 2, py: 1 }}
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={
                            numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
                        }
                        disabled={items.length === 0}
                        inputProps={{
                            'aria-label': 'all items selected',
                        }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
            />
            <Divider />
            <List
                sx={{
                    width: "100%",
                    height: 300,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                {items.map((value: User) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItem
                            key={value.idUser}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value.firstName} ${value.lastName}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Card>
    );

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ width: 'calc(100% - 16px)', ml: '16px', mt:2}}>
            <Grid item xs={5}>{customList('Except for:', left)}</Grid>
            <Grid item xs={2}>
                <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={5}>{customList('Send to:', right)}</Grid>
            <Grid item xs={12}>
                <TextField
                    select
                    key="prepair-time"
                    label="Prepairing time"
                    fullWidth
                    value={prepairingLevel}
                    onChange={(event) => setPreparingLevel(Number(event.target.value))}
                >
                        <MenuItem key={0} value={0}>None</MenuItem>
                        <MenuItem key={15} value={15}>Bad</MenuItem>
                        <MenuItem key={35} value={35}>Enough</MenuItem>
                        <MenuItem key={50} value={50}>Good</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Link to="/teacher/tests/share" key="completedTests" component={NavLink} sx={{ textDecoration: 'none' }}>
                    <Button fullWidth variant="contained" color="primary" disabled={right.length < 1 || themeId === ''}>
                        Assign test
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}